import "./ConteudoSecundario.css"

const ConteudoSecundario = () =>{
    return(
        <section className="conteudo-secundario">
            <div>
                <h3 className="border">O que ela faz por você?</h3>
            </div>
            <p>1.Cria um <strong>sistema de verificação capcha</strong> para novos membros garantirem que não são robôs</p>
            <p>2.Possui um <strong>sistema de banimento automático</strong> para links suspeitos que forem enviados na comunidade</p>
            <p>3.<strong>Sistema de avisos e banimento manual</strong>, para pessoas adminustradiras utilizarem</p>
        </section>
    )

}

export default ConteudoSecundario