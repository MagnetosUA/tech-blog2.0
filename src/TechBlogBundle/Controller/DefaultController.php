<?php

namespace TechBlogBundle\Controller;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
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

    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
//        $user = $em->find('TechBlogBundle:Autor', 9);
//        $refs = $user->getReferers();
//        foreach ($refs as $ref) {
//            echo $ref->getName()."<br>";
//        }die;
//        $user->addReferer($autor);
        $post = $em->find('TechBlogBundle:Post', 63);
        var_dump($post->getCategory());die;

//        $em->remove($post);
        $em->persist($user);
        $u = $em->getUnitOfWork()->size();
        var_dump($u);
        $em->flush();die;

        $repo = $em->getRepository('TechBlogBundle:Category');
        $science1 = $repo->findOneByTitle('Science');
//        var_dump($science1);
        echo $repo->childCount($science1);

        $path = $repo->getPath($biology);

        $this->goodPrintR($path);

        echo $repo->verify();
        echo $repo->recover();

        $em->remove($science);
        $em->remove($biology);
        $em->remove($cytology);
        $em->flush();


        die;



//        $post = $em->find('TechBlogBundle:Post', $post);
//        $post->setArticle('nirvanaaaaaa');

//        $autor = new Autor();
//        $autor->setName('alx2k2');
//        $autor->setCity('sss2');
//        $autor->setLanguage('ru2');

        $post = new Post();
        $post->setTitle('AC/DC');
//        $post->setAutor($user);
        $post->setArticle('Australia');
        $post->setCategory('Music');
        $post->setLanguage('Rock');
        $post->setRating(10);

        $em = $this->getDoctrine()->getManager();
//        $em->persist($autor);
        $em->persist($post);
        $em->flush();
        echo $post->getSlug();
        return new Response('<body><p>response</p></body>');

//
//
//        $form = $this->createForm('TechBlogBundle\Form\AutorType', $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $autor = $form->getData();

            $em->persist($autor);
            $em->flush();

            return $this->redirect($request->getUri());
        }


        foreach ($autor->getPosts() as $post) {

        }

        return $this->render('@TechBlog/Default/index.html.twig', [
            'form' => $form->createView(),
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
