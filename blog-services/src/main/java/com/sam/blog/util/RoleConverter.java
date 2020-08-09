package com.sam.blog.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import com.sam.blog.model.Role;

@Converter(autoApply = true)
public class RoleConverter implements AttributeConverter<Role, String> {

    @Override
    public String convertToDatabaseColumn(Role role) {
        return role.name();
    }

    @Override
    public Role convertToEntityAttribute(String s) {
        return Role.of(s);
    }

}
