<?php

namespace TechBlogBundle\Form;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use TechBlogBundle\Entity\Post;
use TechBlogBundle\Entity\Tag;

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
            ->add('tags', EntityType::class, [
                'class' => 'TechBlogBundle\Entity\Tag',
                'choice_label' => 'name',
                'by_reference' => false,
                'multiple' => true,
                'attr' => [
                    'class' => 'select_tags'
                ]
            ])
            ->add('Save', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }

}
