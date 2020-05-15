/*not sure if this is the correct way to do it. There was a lot of troubleshooting involved trying to get other users to have access.*/

CREATE LOGIN guestUser WITH password='guest@CSS475';

CREATE USER guestUser FOR LOGIN guestUser WITH DEFAULT_SCHEMA = [Vehicle Database];

ALTER ROLE db_owner ADD MEMBER guestUser;