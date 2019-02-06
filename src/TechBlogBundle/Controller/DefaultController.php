<?php

namespace TechBlogBundle\Controller;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\DateIntervalType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use TechBlogBundle\Entity\Autor;
use TechBlogBundle\Entity\Category;
use TechBlogBundle\Entity\Post;
use TechBlogBundle\Form\AutorType;
use TechBlogBundle\Form\PostType;
use TechBlogBundle\Services\SqrtProvider;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

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

    /**
     * @Template(vars={"post"})
     * @ParamConverter("post", class="TechBlogBundle:Post")
     */
    public function indexAction()
    {
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
