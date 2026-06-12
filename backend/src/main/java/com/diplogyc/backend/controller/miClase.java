package com.diplogyc.backend.controller;

import java.time.Instant;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class miClase {

    // Línea con más de 100 caracteres (Google Style permite máximo 100)
    public String unMetodoConUnNombreDemasiadoLargoQueExcedeElLimiteDeCaracteresPermitidosPorGoogleStyle() {
        return "hola";
    }

    // Llaves de apertura en línea nueva → Google Style las exige en la misma línea
    public void otroMetodo() {
        System.out.println("mal");
    }
}
