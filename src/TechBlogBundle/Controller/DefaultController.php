<?php

namespace TechBlogBundle\Controller;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
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

    public function indexAction($number, EntityManagerInterface $entityManager, Request $request)
    {

//        $autor = new Autor();
//        $autor->setName('h7788i7');
//        $autor->setCity(5);
//        $entityManager->persist($autor);
//        $entityManager->flush();
        $autor = $this->getDoctrine()->getRepository(Autor::class)->find(25);

//        $post = new Post();
//        $post->setTitle('My postd');
//        $post->setRating(35);
//        $post->setDatePublication(new \DateTime());
//        $post->setCategory("Electro");
//        $post->setArticle("article ofsdd my electro");
//        $post->setAutor($autor);

//        $post = new Post();
//        $autor = new Autor();

//        $entityManager->persist($autor);
//        $entityManager->persist($post);
//        $entityManager->flush();

//        $autor->setPosts($post);
//        var_dump($autor);die;

//        $posts = $autor->getPosts();

//        echo die;
//        foreach ($autors as $autor) {
//            $posts = $this->getDoctrine()->getRepository(Post::class)->findBy(['autor' => $autor->getId()]);
//            $all[] = [$autor, $posts];
//        }

//        phpinfo();die;
//        $request = $request->query->get('param');
//        var_dump($request);die;
        $post = $this->getDoctrine()->getRepository(Post::class)->find($number);
//        $form = $this->createFormBuilder()
//            ->add('title', TextType::class, [
//                'required' => true
//            ])
//            ->add('rating', RangeType::class)
//            ->add('datePublication', DateType::class)
//            ->add('category', TextType::class)
//            ->add('article')
//            ->add('int', IntegerType::class)
//            ->add('currency', MoneyType::class, [
//                'currency' => 'USD',
//            ])
//            ->add('number', NumberType::class)
//            ->add('percent', PercentType::class)
//            ->add('search', SearchType::class)
//            ->add('tel', TelType::class)
//            ->add('color', ColorType::class)
//            ->add('country', CountryType::class)
//            ->add('date_interval', DateIntervalType::class)
//            ->add('time', TimeType::class)
//            ->add('birthday', BirthdayType::class)
//            ->add('autor', EntityType::class, [
//                'class' => 'TechBlogBundle\Entity\Autor',
//                'choice_label' => 'name',
//            ])
//            ->add('save', SubmitType::class, ['label' => 'Create Task'])
//            ->getForm();
        $formAutor = $this->createForm(AutorType::class, $autor);
        $form = $this->get('form.factory')->createNamed('my_post', PostType::class, $post);

        $form->handleRequest($request);
//        var_dump($a);die;
        if ($form->isSubmitted() && $form->isValid()) {
//            var_dump($form->get('is_unique')->getData());die;
            $post = $form->getData();
//            var_dump($post);
            $entityManager->persist($post);
            $entityManager->flush();
            $route = $this->generateUrl('tech_blog_homepage', [
                'number' => $post->getId(),
            ]);
            $route = $request->getUri();
            return $this->redirect($route);
        }
//        $post = new Post();
//        $post->setTitle('aya');
//
//        $validator = $this->get('validator');
//        $val = $validator->validate($post);
//
//        if (count($val) > 0) {
//            $errors = (string)$val;
//            $errors = "<pre>".$errors."</pre>";
//            return new Response($errors);
//        }
//        return new Response('No problem !');

//        var_dump($post);
        $sqrtProvider = $this->container->get('sqrt.provider');
        $sqrt = $sqrtProvider->getSqrt($number);
        return $this->render('@TechBlog/Default/index.html.twig', [
            'sqrt' => $sqrt,
            'form' => $form->createView(),
            'form_autor' => $formAutor->createView(),
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
