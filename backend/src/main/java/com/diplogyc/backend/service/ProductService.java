package com.diplogyc.backend.service;

import com.diplogyc.backend.model.Product;
import com.diplogyc.backend.repository.ProductRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  public Product createProduct(Product product) {
    product.setId(null);
    return productRepository.save(product);
  }
}
