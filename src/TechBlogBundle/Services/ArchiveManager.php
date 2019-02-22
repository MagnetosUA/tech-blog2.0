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


        $firstDate = $postsRepository->findPointDatePublication('ASC');
        $lastDate = $postsRepository->findPointDatePublication('DESC');

        $start    = ($firstDate[0]['createdAt'])->modify('first day of this month');
        $end      = ($lastDate[0]['createdAt'])->modify('first day of next month');

        $interval = \DateInterval::createFromDateString('1 month');
        $period   = new \DatePeriod($start, $interval, $end);

        $year = [];

        foreach ($period as $dt) {
            $y = $dt->format("Y");
            $year[$y][] = $dt->format("M");;
        }

        return $year;
    }
}
