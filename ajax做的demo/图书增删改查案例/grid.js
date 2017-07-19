$(function(){
    // 共有查询方法
    function queryData(data,callback){
        $.ajax({
            type : 'post',
            url : 'bookInfo.php',
            data : data,
            dataType : 'json',
            success : function(data){
                callback(data);
            }
        });
    }
    // 初始化数据列表
    var init = function(data){
        var tag = '';
        $.each(data,function(i,e){
            tag += '<tr><td>'+e.id+'</td><td>'+e.bookName+'</td><td>'+e.bookAuthor+'</td><td>'+e.category+'</td><td>'+e.recommend+'</td><td>'+e.bookDesc+'</td><td><a href="javascript:;">修改</a>|<a href="javascript:;">删除</a></td></tr>';
        });
        $('#bookList tbody').html(tag);
        // 绑定事件
        $('#bookList tbody tr').each(function(i,e){
            var td = $(e).find('td:eq(6)');
            var id = $(e).find('td:eq(0)').text();
            // 修改操作
            td.children('a:eq(0)').click(function(){
                // flag=3表示更新时查询要更新的数据
                updateBook({flag:3,id:id});
            });
            // 删除操作
            td.children('a:eq(1)').click(function(){
                deleteBook({flag:2,id:id});
            });
        });
        // 重置表单
        $('#formId').get(0).reset();
        // 添加图书按钮绑定事件
        $('#btn').unbind('click').click(function(){
            var form = $('#formId').serialize();
            form += '&flag=1';
            queryData(form,function(data){
                init(data);
            });
        });
    };
    // 初始化数据列表
    queryData({flag:0},init);
    // 删除数据
    function deleteBook(data){
        queryData(data,function(){
            queryData({flag:0},init);
        });
    }
    // 更新时查询数据
    function updateBook(data){
        queryData(data,function(data){
            var id = data.id;
            var bookName = data.bookName;
            var bookAuthor = data.bookAuthor;
            var category = data.category;
            var bookDesc = data.bookDesc;
            var recommend = data.recommend;
            // 设置是否推荐
            $('#formId input[name=recommend][value='+recommend+']').prop('checked',true);
            // 设置分类（先清空选项，然后根据跟新的值进行重新设置）
            $('#formId input:checkbox').prop('checked', false);
            var arr = category.split(',');
            $.each(arr,function(){
                $('#formId input[value='+Number(this)+']:checkbox').prop('checked',true);
            });
            $('#id').val(id);
            $('#bookName').val(bookName);
            $('#bookAuthor').val(bookAuthor);
            $('#bookDesc').val(bookDesc);
            $('#btn').unbind('click').click(function(){
                var form = $('#formId').serialize();
                form += '&flag=4';
                queryData(form,function(data){
                    init(data);
                });
            });
        });
    }
    
});