CREATE TABLE `task` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `description` varchar(255),
  `created_at` timestamp,
  `status` enum(pending,completed ,in process)
);

CREATE TABLE `user` (
  `id` integer PRIMARY KEY,
  `username` varchar(255)
);

CREATE TABLE `todo` (
  `id` integer PRIMARY KEY,
  `id_user` integer,
  `id_task` integer
);

ALTER TABLE `task` ADD FOREIGN KEY (`id`) REFERENCES `user` (`id`);

ALTER TABLE `user` ADD FOREIGN KEY (`id`) REFERENCES `todo` (`id_user`);

ALTER TABLE `task` ADD FOREIGN KEY (`id`) REFERENCES `todo` (`id_task`);
