<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use TechBlogBundle\Entity\Author;
use TechBlogBundle\Form\AuthorRegistrationType;
use TechBlogBundle\Security\LoginFormAuthenticator;

class AuthorController extends Controller
{
    public function registerAction(Request $request, LoginFormAuthenticator $formAuthenticator)
    {
        $form = $this->createForm(AuthorRegistrationType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            /** @var Author $author */
            $author = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($author);
            $em->flush();
            $this->addFlash('success', 'Welcome '.$author->getNickname());

            return $this->get('security.authentication.guard_handler')
                ->authenticateUserAndHandleSuccess(
                    $author,
                    $request,
                    $formAuthenticator,
                    'main'
                );
        }

        return $this->render('@TechBlog/Author/register.html.twig', [
            'form' => $form->createView()
        ]);
    }
}

