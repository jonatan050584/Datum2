<?php
$pdo = new PDO("mysql:host=localhost;dbname=datum_app","root","root");

$sql = "select * from categoria order by id asc";

$stmt = $pdo->prepare($sql);
$stmt->execute();



$res = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($res as $row){
	$id = $row["id"];
	$cat = array_map('utf8_encode',$row);

	$sql = "select t.id,t.titulo,t.subtitulo,t.info,t.tema_id as padre, (select count(*) from tema k where k.tema_id=t.id) as cant from tema t where t.categoria_id=".$id;
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
	$res2 = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$tema = null;
	foreach($res2 as $it){

		$tem = array_map('utf8_encode',$it);

		if($tem["cant"]>0) $tem["hijos"]=true;
		else $tem["hijos"]=false;

		if($tem["padre"]=="") $tem["padre"]=null;
		$sql = "select s.*,g.alias as tipo from sondeo s inner join grafico g on s.grafico_id=g.id where s.tema_id=".$it["id"];
		$stmt = $pdo->prepare($sql);
		$stmt->execute();
		$res3 = $stmt->fetchAll(PDO::FETCH_ASSOC);

		$gr = null;
		foreach($res3 as $g){
			$gr[] = array_map('utf8_encode',$g);
		}
		$tem["sondeo"] = $gr;


		

		$tema[] = $tem;
	}
	$cat["temas"] = $tema;

	$data[] = $cat;
} 


$return["data"] = $data;

echo json_encode($return);

?>