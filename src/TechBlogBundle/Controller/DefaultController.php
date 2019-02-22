<?php

namespace TechBlogBundle\Controller;

use Doctrine\ORM\Query;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use TechBlogBundle\Entity\Category;
use TechBlogBundle\Entity\Post;
use TechBlogBundle\Entity\Tag;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * Class DefaultController
 * @package TechBlogBundle\Controller
 */
class DefaultController extends Controller
{

    private function goodPrintR($array)
    {
        echo "<h3>New----------Print-----------End</h3>";
        echo "<pre>";
        print_r($array);
        echo "</pre>";
    }


    public function indexAction(Request $request)
    {
        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');


        $firstDate = $postsRepository->findPointDatePublication('ASC');
        $lastDate = $postsRepository->findPointDatePublication('DESC');

        $start    = ($firstDate[0]['createdAt'])->modify('first day of this month');
        $end      = ($lastDate[0]['createdAt'])->modify('first day of next month');

        $interval = \DateInterval::createFromDateString('1 month');
        $period   = new \DatePeriod($start, $interval, $end);

        $year = [];

        foreach ($period as $dt) {
            $y = $dt->format("Y");
            $year[$y][] = $dt->format("M");;
        }

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
        $em = $this->getDoctrine()->getManager();
        $post = $em->find(Post::class, $post);
        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();



        return $this->render('@TechBlog/Default/post.html.twig', [
            'post' => $post,
            'tags' => $tags,
        ]);

    }

    public function showByCategoryAction(Category $category, Request $request)
    {
        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $postsRepository->findAllQueryByCategory($category), /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        return $this->render('@TechBlog/Default/by_categoty.html.twig', [
            'posts' => $pagination,
        ]);
    }

    public function showByTagAction(Tag $tag, Request $request)
    {
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
        ]);
    }

    /**
     * @ParamConverter("date", options={"format": "Y-M"})
     */
    public function showByCreatedAtAction(Request $request, \DateTime $date)
    {
        $postsRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');

//        var_dump($date->format('Y'));die;



        $firstDate = $postsRepository->findPointDatePublication('ASC');
        $lastDate = $postsRepository->findPointDatePublication('DESC');

        $start    = ($firstDate[0]['createdAt'])->modify('first day of this month');
        $end      = ($lastDate[0]['createdAt'])->modify('first day of next month');

        $interval = \DateInterval::createFromDateString('1 month');
        $period   = new \DatePeriod($start, $interval, $end);

        $year = [];

        foreach ($period as $dt) {
            $y = $dt->format("Y");
            $year[$y][] = $dt->format("M");;
        }

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

