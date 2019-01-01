<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/sum/{n1}/{n2}")
     */
    public function sumAction($n1, $n2)
    {
        $result = $n1 + $n2;
        return new Response("<h3>$result</h3>");
    }
}
