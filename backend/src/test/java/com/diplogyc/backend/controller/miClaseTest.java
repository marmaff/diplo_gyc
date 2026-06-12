package com.diplogyc.backend.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class miClaseTest {

  @Test
  void shouldReturnHolaFromLongNamedMethod() {
    miClase obj = new miClase();

    String result = obj.unMetodoConUnNombreDemasiadoLargoQueExcedeElLimiteDeCaracteresPermitidosPorGoogleStyle();

    assertEquals("hola", result);
  }

  @Test
  void shouldExecuteOtroMetodoWithoutException() {
    miClase obj = new miClase();

    obj.otroMetodo();
  }
}
