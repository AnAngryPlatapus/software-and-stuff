package com.sam.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sam.blog.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
