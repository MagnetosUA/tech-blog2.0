<?php

namespace TechBlogBundle\Controller;

use Doctrine\ORM\Query;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use TechBlogBundle\Entity\Category;
use TechBlogBundle\Entity\Post;
use TechBlogBundle\Entity\Tag;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use TechBlogBundle\Services\ArchiveManager;

/**
 * Class DefaultController
 * @package TechBlogBundle\Controller
 */
class DefaultController extends Controller
{

    /**
     * @var ArchiveManager
     */
    private $archiveManager;

    public function __construct(ArchiveManager $archiveManager)
    {

        $this->archiveManager = $archiveManager;
    }

    private function goodPrintR($array)
    {
        echo "<h3>New----------Print-----------End</h3>";
        echo "<pre>";
        print_r($array);
        echo "</pre>";
    }


    public function indexAction(Request $request)
    {
        $year = $this->archiveManager->getPostPeriod();

        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');
        $lastArticles = $postsRepository->findThreeLastArticles();

        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $postsRepository->findAllQuery(), /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        return $this->render('@TechBlog/Default/index.html.twig', [
            'last_articles' => $lastArticles,
            'posts' => $pagination,
            'tags' => $tags,
            'period' => $year,
        ]);
    }

    public function showPostAction(Post $post)
    {
        $year = $this->archiveManager->getPostPeriod();

        $em = $this->getDoctrine()->getManager();
        $post = $em->find(Post::class, $post);
        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();



        return $this->render('@TechBlog/Default/post.html.twig', [
            'post' => $post,
            'tags' => $tags,
            'period' => $year,
        ]);

    }

    public function showByCategoryAction(Category $category, Request $request)
    {
        $year = $this->archiveManager->getPostPeriod();


        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');
        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $postsRepository->findAllQueryByCategory($category), /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        return $this->render('@TechBlog/Default/by_categoty.html.twig', [
            'posts' => $pagination,
            'period' => $year,
            'tags' => $tags,
        ]);
    }

    public function showByTagAction(Tag $tag, Request $request)
    {
        $year = $this->archiveManager->getPostPeriod();

        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');

        $paginator  = $this->get('knp_paginator');

        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();

        $pagination = $paginator->paginate(
            $postsRepository->findAllQueryByTag($tag), /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        return $this->render('@TechBlog/Default/by_tag.html.twig', [
            'posts' => $pagination,
            'tags' => $tags,
            'period' => $year,
        ]);
    }

    /**
     * @ParamConverter("date", options={"format": "Y-M"})
     */
    public function showByCreatedAtAction(Request $request, \DateTime $date)
    {
        $year = $this->archiveManager->getPostPeriod();

        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');

        $lastArticles = $postsRepository->findThreeLastArticles();

        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $postsRepository->findAllByDateQuery($date), /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        return $this->render('@TechBlog/Default/index.html.twig', [
            'last_articles' => $lastArticles,
            'posts' => $pagination,
            'tags' => $tags,
            'period' => $year,
        ]);
    }
}

