<?php

namespace App\Controller;

use App\Entity\Membre;
use Doctrine\ORM\EntityManager;
use PhpParser\Builder\Function_;
use App\HttpClient\ApiHttpClient;
use Doctrine\ORM\Query\Expr\Func;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    #[Route('/borne', name: 'borne_list')]
    public function index(ApiHttpClient $apiHttpClient): Response
    {
        $bornes = $apiHttpClient->getBorne();
        return $this->render('borne/index.html.twig', [
            'bornes' => $bornes,
        ]);
    }

    
}
