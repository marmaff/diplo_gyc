package com.diplogyc.backend.repository;

import com.diplogyc.backend.model.Product;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

  private final List<Product> products = new ArrayList<>();
  private final AtomicLong idSequence = new AtomicLong(1);

  public ProductRepository() {
    products.add(new Product(idSequence.getAndIncrement(), "Notebook", "Ultrabook 14 pulgadas", 1499.99));
    products.add(new Product(idSequence.getAndIncrement(), "Mouse", "Mouse inalámbrico", 39.90));
    products.add(new Product(idSequence.getAndIncrement(), "Teclado", "Teclado mecánico", 89.00));
  }

  public List<Product> findAll() {
    return new ArrayList<>(products);
  }

  public Product save(Product product) {
    if (product.getId() == null) {
      product.setId(idSequence.getAndIncrement());
    }
    products.add(product);
    return product;
  }
}
