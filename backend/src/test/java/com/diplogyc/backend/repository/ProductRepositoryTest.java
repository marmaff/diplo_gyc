package com.diplogyc.backend.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.diplogyc.backend.model.Product;
import java.util.List;
import org.junit.jupiter.api.Test;

class ProductRepositoryTest {

  @Test
  void shouldInitializeWithHardcodedProducts() {
    ProductRepository repository = new ProductRepository();

    List<Product> products = repository.findAll();

    assertEquals(3, products.size());
    assertNotNull(products.get(0).getId());
  }

  @Test
  void shouldAddProductOnSave() {
    ProductRepository repository = new ProductRepository();
    Product product = new Product(null, "Monitor", "Monitor 24", 199.99);

    Product saved = repository.save(product);

    assertNotNull(saved.getId());
    assertEquals(4, repository.findAll().size());
  }
}
