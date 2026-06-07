package com.diplogyc.backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.diplogyc.backend.model.Product;
import com.diplogyc.backend.repository.ProductRepository;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

  @Mock
  private ProductRepository productRepository;

  @InjectMocks
  private ProductService productService;

  @Test
  void shouldReturnAllProductsFromRepository() {
    List<Product> products = List.of(new Product(1L, "Notebook", "Ultrabook", 1499.99));
    when(productRepository.findAll()).thenReturn(products);

    List<Product> result = productService.getAllProducts();

    assertEquals(1, result.size());
    assertEquals("Notebook", result.get(0).getName());
    verify(productRepository).findAll();
  }

  @Test
  void shouldAssignIdThroughRepositoryWhenSaving() {
    Product input = new Product(99L, "Nuevo", "Desc", 25.00);
    Product saved = new Product(4L, "Nuevo", "Desc", 25.00);
    when(productRepository.save(input)).thenReturn(saved);

    Product result = productService.createProduct(input);

    assertNull(input.getId());
    assertEquals(4L, result.getId());
    verify(productRepository).save(input);
  }
}
