<?php

namespace TechBlogBundle\Form;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use TechBlogBundle\Entity\Post;

class PostType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('article')
            ->add('category', EntityType::class, [
                'class' => 'TechBlogBundle\Entity\Category',
                'choice_label' => 'title',
            ])
            ->add('author', EntityType::class, [
                'class' => 'TechBlogBundle\Entity\Author',
                'choice_label' => 'name',
            ])
            ->add('Create', SubmitType::class);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }

}
