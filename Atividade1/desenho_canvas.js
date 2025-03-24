function desenhar_linha()
  {
  const paragrafo = document.createElement('canvas') ;
  paragrafo.classList.add('desenho-container__linha') ;
  const ctx = paragrafo.getContext("2d") ;
  ctx.beginPath() ;
  ctx.moveTo(0, 0) ; //Inciar Linha
  ctx.lineTo(500, 300) ; //Final Linha
  ctx.stroke() ; // faz desenhar
  const container = document.getElementById('desenho-container') ;
  container.appendChild(paragrafo) ;
  }

  function desenhar_circulo()
  {
  const paragrafo = document.createElement('canvas') ;
  paragrafo.classList.add('desenho-container__circulo') ;
  const ctx = paragrafo.getContext("2d") ;
  ctx.beginPath() ;
  //ctx.arc(x, y, raio, ângulo inicial, ângulo final, sentido horário/anti-horário)
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true ) ;
  ctx.stroke() ;// faz desenhar
  const container = document.getElementById('desenho-container') ;
  container.appendChild(paragrafo) ;
  }
 
  function desenhar_semi_circulo_anti_horario()
  {
  const paragrafo = document.createElement('canvas') ;
  paragrafo.classList.add('desenho-container__circulo_anti_horario') ;
  const ctx = paragrafo.getContext("2d") ;
  ctx.beginPath() ;
  //ctx.arc(x, y, raio, ângulo inicial, ângulo final, sentido horário/anti-horário)
  ctx.arc(75, 75, 50, 0, Math.PI, true ) ;
  ctx.stroke() ;// faz desenhar
  const container = document.getElementById('desenho-container') ;
  container.appendChild(paragrafo) ;
  }
 
  function desenhar_semi_circulo_horario()
  {
  const paragrafo = document.createElement('canvas') ;
  paragrafo.classList.add('desenho-container__circulo_horario') ;
  const ctx = paragrafo.getContext("2d") ;
  ctx.beginPath() ;
  //ctx.arc(x, y, raio, ângulo inicial, ângulo final, sentido horário/anti-horário)
  ctx.arc(75, 75, 50, 0, Math.PI, false) ;
  ctx.stroke() ;// faz desenhar
  const container = document.getElementById('desenho-container') ;
  container.appendChild(paragrafo) ;
  }

  function desenhar_triangulo()
  {
  const paragrafo = document.createElement('canvas') ;
  paragrafo.classList.add('desenho-container__triangulo') ;
  const ctx = paragrafo.getContext("2d") ;
  ctx.beginPath() ;
  ctx.moveTo(125, 125) ;
  ctx.lineTo(125, 45) ;
  ctx.lineTo(45, 125) ;
  ctx.closePath() ; //não preenche o desenho
  ctx.stroke() ;// faz desenhar
  const container = document.getElementById('desenho-container') ;
  container.appendChild(paragrafo) ;
  }

  function desenhar_triangulo_preenchido()
  {
  const paragrafo = document.createElement('canvas') ;
  paragrafo.classList.add('desenho-container__triangulo_preenchido') ;
  const ctx = paragrafo.getContext("2d") ;
  ctx.beginPath() ;
  ctx.moveTo(25, 25) ;
  ctx.lineTo(105, 25) ;
  ctx.lineTo(25, 105) ;
  ctx.fill() ; //preenche o desenho
  ctx.stroke() ;// faz desenhar
  const container = document.getElementById('desenho-container') ;
  container.appendChild(paragrafo) ;
  }

  function desenhar_uma_carinha_feliz()
  {
    const paragrafo = document.createElement('canvas') ;
    paragrafo.classList.add('desenho-container__triangulo_preenchido') ;
    const ctx = paragrafo.getContext("2d") ;
    ctx.beginPath() ;
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true) ; // Círculo exterior
    ctx.moveTo(110, 75) ;
    ctx.arc(75, 75, 35, 0, Math.PI, false) ; // Boca (sentido horário)
    ctx.moveTo(65, 65) ;
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true) ; // Olho esquerdo
    ctx.moveTo(95, 65) ;
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true) ; // Olho direito
    ctx.stroke() ;// faz desenhar
    const container = document.getElementById('desenho-container') ;
    container.appendChild(paragrafo) ;
  }

  function desenhar_bezier_quadraticas()
  {
    const paragrafo = document.createElement('canvas') ;
    paragrafo.classList.add('desenho-container__triangulo_preenchido') ;
    const ctx = paragrafo.getContext("2d") ;
    ctx.beginPath() ;
    ctx.moveTo(75, 25) ;
    ctx.quadraticCurveTo(25, 25, 25, 62.5)  ;
    ctx.quadraticCurveTo(25, 100, 50, 100)  ;
    ctx.quadraticCurveTo(50, 120, 30, 125)  ;
    ctx.quadraticCurveTo(60, 120, 65, 100)  ;
    ctx.quadraticCurveTo(125, 100, 125, 62.5) ;
    ctx.quadraticCurveTo(125, 25, 75, 25) ;
    ctx.stroke() ;// faz desenhar
    const container = document.getElementById('desenho-container') ;
    container.appendChild(paragrafo) ;
  }

  function desenhar_bezier_cubicas()
  {
    const paragrafo = document.createElement('canvas') ;
    paragrafo.classList.add('desenho-container__triangulo_preenchido') ;
    const ctx = paragrafo.getContext("2d") ;
    ctx.beginPath() ;
    ctx.moveTo(75, 40) ;
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25) ;
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5) ;
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120) ;
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5) ;
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25) ;
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40) ;
    ctx.closePath() ; //não preenche o desenho
    ctx.stroke() ;// faz desenhar
    const container = document.getElementById('desenho-container') ;
    container.appendChild(paragrafo) ;
  }
 
  function desenhar_bezier_cubicas_preenchido()
  {
    const paragrafo = document.createElement('canvas') ;
    paragrafo.classList.add('desenho-container__triangulo_preenchido') ;
    const ctx = paragrafo.getContext("2d") ;
    ctx.beginPath() ;
    ctx.moveTo(75, 40) ;
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25) ;
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5) ;
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120) ;
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5) ;
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25) ;
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40) ;
    ctx.fill() ; //preenche o desenho
    ctx.stroke() ;// faz desenhar
    const container = document.getElementById('desenho-container') ;
    container.appendChild(paragrafo) ;
  }
 
  desenhar_linha() ;
  desenhar_circulo() ;
  desenhar_semi_circulo_anti_horario() ;
  desenhar_semi_circulo_horario() ;
  desenhar_triangulo() ;
  desenhar_triangulo_preenchido() ;
  desenhar_uma_carinha_feliz() ;
  desenhar_bezier_quadraticas() ;
  desenhar_bezier_cubicas() ;
  desenhar_bezier_cubicas_preenchido() ;