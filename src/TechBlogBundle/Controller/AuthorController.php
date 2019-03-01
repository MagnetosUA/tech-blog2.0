<?php

namespace TechBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use TechBlogBundle\Entity\Author;
use TechBlogBundle\Form\AuthorRegistrationType;

class AuthorController extends Controller
{
    public function registerAction(Request $request)
    {
        $form = $this->createForm(AuthorRegistrationType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            /** @var Author $author */
            $author = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($author);
            $em->flush();
            $this->addFlash('success', 'Welcome '.$author->getNickname());
            return $this->redirectToRoute('tech_blog_homepage');
        }

        return $this->render('@TechBlog/Author/register.html.twig', [
            'form' => $form->createView()
        ]);
    }
}

