package com.ubaid.BootAngularApp.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ubaid.BootAngularApp.entity.Todo;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Integer>
{
	@Query(value = "select * from todo where user_name like :userName", nativeQuery = true)
	List<Todo> findAllByUserName(@Param("userName") String userName);
	
	@Modifying
	@Query(value = "delete from todo where id = :id and user_name = :userName", nativeQuery = true)
	int delete(@Param("id") int id, @Param("userName") String userName);

	@Modifying
	@Query(value = "update todo set description = :desc, is_done = :isDone, target_date = :targetDate where id = :id and user_name = :userName", nativeQuery = true)
	int update(@Param("desc") String desc, @Param("isDone") boolean isDone, @Param("targetDate") Date date, @Param("id") int id, @Param("userName") String userName);
	
	@Query(value = "select * from todo where id = :id and user_name = :username", nativeQuery = true)
	Todo getTodo(@Param("id") int id, @Param("username") String username);
	
}
