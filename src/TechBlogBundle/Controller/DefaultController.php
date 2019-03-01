<?php

namespace TechBlogBundle\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use TechBlogBundle\Entity\Category;
use TechBlogBundle\Entity\Post;
use TechBlogBundle\Entity\Tag;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use TechBlogBundle\Form\PostType;
use TechBlogBundle\Repository\PostRepository;
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

    public function indexAction(Request $request, PostRepository $postRepository)
    {
        list($tags, $pagination, $postRepository, $year) = $this->getData($request,__FUNCTION__, null);

        $lastArticles = $postRepository->findThreeLastArticles();

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
        list($tags, $pagination, $postRepository, $year) = $this->getData($request, __FUNCTION__, $category);

        return $this->render('@TechBlog/Default/by_categoty.html.twig', [
            'posts' => $pagination,
            'period' => $year,
            'tags' => $tags,
        ]);
    }

    public function showByTagAction(Tag $tag, Request $request)
    {
        list($tags, $pagination, $postRepository, $year) = $this->getData($request, __FUNCTION__, $tag);

        return $this->render('@TechBlog/Default/by_tag.html.twig', [
            'posts' => $pagination,
            'tags' => $tags,
            'period' => $year,
        ]);
    }

    /**
     * @param Request $request
     * @param \DateTime $date
     * @return \Symfony\Component\HttpFoundation\Response
     * @ParamConverter("date", options={"format": "Y-M"})
     */
    public function showByCreatedAtAction(Request $request, \DateTime $date)
    {
        list($tags, $pagination, $postRepository, $year) = $this->getData($request, __FUNCTION__, $date);

        $lastArticles = $postRepository->findThreeLastArticles();

        return $this->render('@TechBlog/Default/index.html.twig', [
            'last_articles' => $lastArticles,
            'posts' => $pagination,
            'tags' => $tags,
            'period' => $year,
        ]);
    }

    public function addPostAction(Request $request)
    {
        $form = $this->createForm(PostType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Post $post */
            $post = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($post);
            $em->flush();
            $this->addFlash('notice', 'Post is Success Created!');
            return $this->redirectToRoute('tech_blog_homepage');
        }
        return $this->render('@TechBlog/Default/add_post.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    public function removePostAction(Post $post, EntityManagerInterface $em)
    {
        $this->denyAccessUnlessGranted('edit', $post);

        $em->remove($post);
        $em->flush();
        $this->addFlash('notice', 'Post is Success Removed!');

        return $this->redirectToRoute('tech_blog_homepage');
    }

    public function editPostAction(Post $post, Request $request, EntityManagerInterface $em)
    {
        $this->denyAccessUnlessGranted('edit', $post);

        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var Post $post */
            $post = $form->getData();
            $em->persist($post);
            $em->flush();
            $this->addFlash('notice', 'Post is Success Updated!');
            return $this->redirectToRoute('tech_blog_homepage');
        }
        return $this->render('@TechBlog/Default/add_post.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @param $request
     * @param $action
     * @param $criteria
     * @return array
     */
    private function getData($request, $action, $criteria): array
    {
        $postRepository = $this->getDoctrine()->getRepository('TechBlogBundle:Post');
        $tags = $this->getDoctrine()->getRepository('TechBlogBundle:Tag')->findAll();
        $paginator = $this->get('knp_paginator');

        switch ($action) {
            case 'indexAction':
                $query = $postRepository->findAllQuery();
                break;
            case 'showByCategoryAction':
                $query = $postRepository->findAllQueryByCategory($criteria);
                break;
            case 'showByTagAction':
                $query = $postRepository->findAllQueryByTag($criteria);
                break;
            case 'showByCreatedAtAction':
                $query = $postRepository->findAllByDateQuery($criteria);
                break;
        }

        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        $year = $this->archiveManager->getPostPeriod();

        return array($tags, $pagination, $postRepository, $year);
    }
}

