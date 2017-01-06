$(document).ready(function(){
	$(".removeBook").click(function(e) {
		deleteId = $(this).data('id');
		$.ajax({
			url: '/manage/books/delete/'+deleteId,
			type: 'DELETE',
			success: function() {
			},error: function(err){
				console.log(err);
			}
		});
		window.location = '/manage/books';
	});

	$(".removeCategory").click(function(e) {
		deleteId = $(this).data('id');
		$.ajax({
			url: '/manage/categories/delete/'+deleteId,
			type: 'DELETE',
			success: function() {
			},error: function(err){
				console.log(err);
			}
		});
		window.location = '/manage/categories';
	});
});