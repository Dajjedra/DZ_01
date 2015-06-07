var gulp = require("gulp"),
		connect = require("gulp-connect"),
		opn = require("opn");

// ������ ������� c ������������
gulp.task('serv_livereload', function() {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
	});
	opn('http://localhost:8888');
});

// ������ ������� ��� �����������
gulp.task('serv_no_livereload', function() {
	connect.server({
		root: 'app',
		port: 8888
	});
	opn('http://localhost:8888');
});

// ������ � html
gulp.task('html', function () {
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

// ������ � css
gulp.task('css', function () {
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});

// ������ � js
gulp.task('js', function () {
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});

// ������
gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

// ������ ��-��������� 
gulp.task('default', ['serv_livereload', 'watch']);

// ��� ie
gulp.task('serv', ['serv_no_livereload', 'watch']);