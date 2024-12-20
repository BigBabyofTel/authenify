CREATE TABLE `usersTable` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL,
	`createdAt` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `usersTable_username_unique` ON `usersTable` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `usersTable_password_unique` ON `usersTable` (`password`);--> statement-breakpoint
CREATE INDEX `username_idx` ON `usersTable` (`username`);