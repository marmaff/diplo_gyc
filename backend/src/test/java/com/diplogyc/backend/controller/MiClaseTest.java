package com.diplogyc.backend.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MiClaseTest {

  @Test
  void shouldReturnHolaFromLongNamedMethod() {
    MiClase obj = new MiClase();

    String result = obj.unMetodoConUnNombreDemasiadoLargoQueExcedeElLimiteDeCaracteresPermitidosPorGoogleStyle();

    assertEquals("hola", result);
  }

  @Test
  void shouldExecuteOtroMetodoWithoutException() {
    MiClase obj = new MiClase();

    obj.otroMetodo();
  }
}
