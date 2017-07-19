$(function(){
    // 更新数据操作
    function updateData(id){
        $.ajax({
            type : 'post',
            url : 'http://localhost/grid/bookInfo.php',
            data : {flag : 3,id : id},
            dataType : 'json',
            success : function(data){
                // 把获取的数据填充到表单中
                $('#id').val(data.id);
                $('#bookName').val(data.bookName);
                $('#bookAuthor').val(data.bookAuthor);
                // 设置是否推荐
                $('#formId input[name=recommend][value='+data.recommend+']').prop('checked',true);
                // 设置分类
                $('#formId input:checkbox').prop('checked',false);
                var arr = data.category.split(',');
                $.each(arr,function(i,e){
                    $('#formId input[value='+Number(e)+']:checkbox').prop('checked',true);
                });
                $('#bookDesc').val(data.bookDesc);
                // 重新绑定表单提交事件
                $('#btn').unbind('click').click(function(){
                    // 获取更新后的表单数据
                    var formData = $('#formId').serialize();
                    formData += '&flag=4';
                    $.ajax({
                        type : 'post',
                        url : 'http://localhost/grid/bookInfo.php',
                        data : formData,
                        dataType : 'json',
                        success : function(data){
                            // 渲染数据列表
                            renderData(data);
                        }
                    });
                });
            }
        });
    }
    // 渲染数据列表
    function renderData(data){
        // 数据解析和渲染
        var tag = '';
        $.each(data,function(i,e){
            tag += '<tr><td>'+e.id+'</td><td>'+e.bookName+'</td><td>'+e.bookAuthor+'</td><td>'+e.category+'</td><td>'+e.recommend+'</td><td>'+e.bookDesc+'</td><td><a href="javascript:;">修改</a>|<a href="javascript:;">删除</a></td></tr>';
        });
        $('#bookList tbody').html(tag);
        // 给修改和删除按钮绑定单击事件
        $('#bookList tbody tr').each(function(i,e){
            var td = $(e).find('td:eq(6)');
            var id = $(e).find('td:eq(0)').text();
            // 给修改按钮绑定事件
            td.find('a:eq(0)').click(function(){
                updateData(id);
            });
            // 给删除按钮绑定事件
            td.find('a:eq(1)').click(function(){
                $.ajax({
                    type : 'post',
                    url : 'http://localhost/grid/bookInfo.php',
                    data : {flag : 2,id : id},
                    dataType : 'json',
                    success : function(data){
                        // 渲染数据列表
                        renderData(data);
                    }
                });
            });
        });
        // 重置表单信息
        $('#formId').get(0).reset();
        // 给表单提交按钮绑定事件
        $('#btn').unbind('click').click(function(){
            // 获取所有的表单数据
            var formData = $('#formId').serialize();
            formData += '&flag=1';
            $.ajax({
                type : 'post',
                url : 'http://localhost/grid/bookInfo.php',
                data : formData,
                dataType : 'json',
                success : function(data){
                    // 渲染数据列表
                    renderData(data);
                }
            });
        });

    }
    // 数据加载初始化方法
    function initList(){
        $.ajax({
            type : 'post',
            url : 'http://localhost/grid/bookInfo.php',
            data : {flag : 0},
            dataType : 'json',
            success : function(data){
                // 渲染数据列表
                renderData(data);
            }
        });
    }
    initList();
    
});