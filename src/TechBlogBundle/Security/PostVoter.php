<?php

namespace TechBlogBundle\Security;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use TechBlogBundle\Entity\Author;
use TechBlogBundle\Entity\Post;

class PostVoter extends Voter
{
    const EDIT = 'edit';
    const DELETE = 'delete';

    /**
     * @var AccessDecisionManagerInterface
     */
    private $decisionManager;

    public function __construct(AccessDecisionManagerInterface $decisionManager)
    {

        $this->decisionManager = $decisionManager;
    }

    protected function supports($attribute, $subject)
    {
        // if the attribute isn't one we support, return false
        if (!in_array($attribute, [self::DELETE, self::EDIT])) {
            return false;
        }

        // only vote on Post objects inside this voter
        if (!$subject instanceof Post) {
            return false;
        }

        return true;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        // ROLE_SUPER_ADMIN can do anything! The power!
        if ($this->decisionManager->decide($token, ['ROLE_SUPER_ADMIN'])) {
            return true;
        }

        $author = $token->getUser();

        if (!$author instanceof Author) {
            // the user must be logged in; if not, deny access
            return false;
        }

        /** @var Post $post */
        $post = $subject;

        switch ($attribute) {
            case self::DELETE:
                return $this->canDelete($post, $author);
            case self::EDIT:
                return $this->canEdit($post, $author);
        }

        throw new \LogicException('This code should not be reached!');
    }

    private function canEdit(Post $post, Author $author)
    {
        if ($this->canDelete($post, $author)) {
            return true;
        }
        return false;
    }

    private function canDelete(Post $post, Author $author)
    {
        return $author === $post->getAuthor();
    }

}
