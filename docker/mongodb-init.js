conn = new Mongo();
db = conn.getDB('benzine');
db.createUser({
	user: 'test',
	pwd: 'testpwd',
	roles: [
		{
			role: 'readWrite',
			db: 'benzine'
		}
	]
});
