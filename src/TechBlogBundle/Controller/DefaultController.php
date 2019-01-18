<?php

namespace TechBlogBundle\Controller;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use TechBlogBundle\Entity\Post;
use TechBlogBundle\Services\SqrtProvider;

/**
 * Class DefaultController
 * @package TechBlogBundle\Controller
 */
class DefaultController extends Controller
{

    private $em;

//    public function __construct(EntityManagerInterface $entityManager)
//    {
//        $this->em = $entityManager;
//    }
    public function indexAction($number, EntityManagerInterface $entityManager, Request $request)
    {

//        $post = $this->getDoctrine()->getRepository(Post::class)->findByExpression($number);

//        phpinfo();die;
        $request = $request->query->get('param');
        var_dump($request);die;
        $post = new Post();
        $post->setTitle('aya');

        $validator = $this->get('validator');
        $val = $validator->validate($post);

        if (count($val) > 0) {
            $errors = (string)$val;
            $errors = "<pre>".$errors."</pre>";
            return new Response($errors);
        }
        return new Response('No problem !');

//        var_dump($post);
        $sqrtProvider = $this->container->get('sqrt.provider');
        $sqrt = $sqrtProvider->getSqrt($number);
        return $this->render('@TechBlog/Default/index.html.twig', [
            'sqrt' => $sqrt,
            'post' => $post,
        ]);
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
        $str = "<div style='color:red;'><i>this is the My string!</i></div>";
        $list = "in the morning I usually drink water";

        $topics = array(
//            'topic1' => array('Message 1 of topic 1', 'Message 2 of topic 1'),
            'topic2' => array('title' => array('Title', 'head' => array('h')), 'title1' => array('Title1', 'head1'))
        );

        return $this->render('@TechBlog/Default/hello_user.html.twig', [
            'name' => $name,
            'last_name' => $lastName,
            'str' => $str,
            'list' => $list,
            'topics' => $topics,
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
    public function getSumForwardAction()
    {
        $response = $this->forward('TechBlogBundle:Sum:sum', [
            'n1' => 7,
            'n2' => 2,
        ]);
        return $response;
    }

    /**
     * @return Response
     */
    public function __invoke()
    {
        return new Response("invoke");
    }
}
