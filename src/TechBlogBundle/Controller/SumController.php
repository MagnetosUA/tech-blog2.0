<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * Class SumController
 * @package TechBlogBundle\Controller
 */
class SumController extends Controller
{
    /**
     * @param $n1
     * @param $n2
     * @return Response
     * @Route("/sum/{n1}/{n2}", name="summa")
     */
    public function sumAction($n1, $n2)
    {
        $result = $n1 + $n2;
        return new Response("<h3>$result</h3>");
    }

    /**
     * @return Response
     * @Route("/second-sum")
     */
    public function secondSumAction()
    {
        $route1 = $this->get('router')->generate('summa', [
            'n1' => 9,
            'n2' => 1,
        ]);
        $route2 = $this->generateUrl(
            'summa', [
            'n1' => 9,
            'n2' => 1,
        ], UrlGeneratorInterface::ABSOLUTE_URL
        );


        return new Response("<a href='$route2'>Go</a>");
    }
}

