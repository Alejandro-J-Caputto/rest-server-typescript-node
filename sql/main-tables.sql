

CREATE TABLE users(
  id  int(10) auto_increment not null,
  name varchar(100) not null,
  email varchar(100) not null,
  active tinyint not null default 1,

  CONSTRAINT pk_users PRIMARY KEY(id),
  CONSTRAINT uq_unique UNIQUE(email)
)