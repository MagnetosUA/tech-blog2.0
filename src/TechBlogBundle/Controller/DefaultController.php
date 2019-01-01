<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController
 * @package TechBlogBundle\Controller
 */
class DefaultController extends Controller
{
    /**
     * @param Request $request
     * @return Response
     */
    public function indexAction(Request $request)
    {
        return $this->render('@TechBlog/Default/index.html.twig');
    }

    /**
     * @return Response
     */
    public function showDateAction()
    {
        return $this->render('@TechBlog/Default/date.html.twig');
    }

    public function helloUserAction($name, $lastName)
    {
        return $this->render('@TechBlog/Default/hello_user.html.twig', [
            'name' => $name,
            'last_name' => $lastName,
        ]);
    }

    /**
     * @return JsonResponse
     */
    public function getJsonResponseAction()
    {
        return new JsonResponse(['name' => 'Alex', 'last' => 'Netos']);
    }

    /**
     * @return Response
     */
    public function __invoke()
    {
        return new Response("invoke");
    }
}
