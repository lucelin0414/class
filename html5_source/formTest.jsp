<%@ page contentType="text/html; charset=utf-8" %>
<html>
<head>
     <title>GET 방식 요청</title>
</head>
<body>
<%  // 요청 파라미터의 캐릭터 인코딩을 UTF-8로 지정합니다. 이것은 한글을 올바르게 처리하기 위함입니다.
	request.setCharacterEncoding("utf-8");
%>

<% 
           String id = request.getParameter("id");
           String passwd = request.getParameter("passwd");
 
           out.println("아이디 : " + id + "<br>");
           out.println("비밀번호 : " + passwd + "<br>");
%>
</body>
</html>
