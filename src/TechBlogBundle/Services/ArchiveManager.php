<?php

namespace TechBlogBundle\Services;

use Doctrine\Common\Persistence\ManagerRegistry;
/**
 * Class ArchiveManager
 * @package TechBlogBundle\Services
 */
class ArchiveManager
{
    private $doctrine;

    public function __construct(ManagerRegistry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    public function getPostPeriod()
    {
        $postsRepository = $this->doctrine->getRepository('TechBlogBundle:Post');

//        $dates = $postsRepository->findFirstAndLastDatePublication();
        $dates = $postsRepository->findFirstAndLastDatePublicationByRawSql();
        $firstDate = $dates['first'];
        $lastDate = $dates['last'];

        $firstDate = new \DateTime($firstDate);
        $lastDate = new \DateTime($lastDate);

        $start = ($firstDate)->modify('first day of this month');
        $end = ($lastDate)->modify('first day of next month');

        $interval = \DateInterval::createFromDateString('1 month');
        $period = new \DatePeriod($start, $interval, $end);

        $year = [];

        foreach ($period as $dt) {
            $y = $dt->format("Y");
            $year[$y][] = $dt->format("M");;
        }

        return $year;
    }
}
