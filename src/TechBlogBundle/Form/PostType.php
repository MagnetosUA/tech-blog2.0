<?php

namespace TechBlogBundle\Form;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
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
            ->add('category')
            ->add('date_publication', DateType::class)
            ->add('autor', EntityType::class, [
                'class' => 'TechBlogBundle\Entity\Autor',
                'choice_label' => 'name',
            ])
            ->add('rating')
            ->add('is_unique', CheckboxType::class, [
                'mapped' => false,
                'required' => false
            ])
            ->add('language', LanguageType::class, [
                'data_class' => PostType::class,
            ])
            ->add('send', SubmitType::class);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }

}
