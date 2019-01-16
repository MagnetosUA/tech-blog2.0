<?php

namespace TechBlogBundle\Services;

/**
 * Class SqrtProvider
 * @package TechBlogBundle\Services
 */
class SqrtProvider
{
    public function getSqrt($number)
    {
        return sqrt($number);
//        return 5;
    }
}
