/* we cannot use USE but this is just how to create a new user for the database so we don't have to research it again*/

use master

CREATE LOGIN guestUser WITH password='guest@CSS475';

/*use [Vehicle Database]*/

CREATE USER guestUser FROM LOGIN guestUser;

ALTER ROLE db_owner ADD MEMBER guestUser;