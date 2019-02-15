<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

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

        $paginator  = $this->get('knp_paginator');

        $pagination = $paginator->paginate(
            $postsRepository->findAllQuery(), /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            5/*limit per page*/
        );

        return $this->render('@TechBlog/Default/index.html.twig', [
            'posts' => $pagination
        ]);
    }

}

