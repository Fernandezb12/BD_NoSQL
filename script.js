function showContent(type) {
    let content = '';
    switch(type) {
        case 'documental':
            content = `
                <h2>Bases de Datos Documentales</h2>
                <p><strong>Concepto:</strong> Almacenan datos en documentos JSON o BSON. Ejemplos: MongoDB, Cloud Firestore.</p>
                <p><strong>Características:</strong></p>
                <ul>
                    <li>Esquema flexible</li>
                    <li>Escalabilidad horizontal</li>
                    <li>Alta disponibilidad</li>
                    <li>Alto rendimiento</li>
                </ul>
                <p><strong>Funcionamiento:</strong> Los datos se almacenan como documentos que pueden contener estructuras complejas y anidadas.</p>
                <p><strong>Desventajas:</strong> Pueden ser menos eficientes en consultas que requieren múltiples documentos.</p>
                <p><strong>Página oficial de documentación:</strong> <a href="https://www.mongodb.com/">MongoDB</a></p>
                <img src="IMG/M1.png" alt="Bases de Datos Documentales" class="img-fluid w-50">
`;
            break;
        case 'claveValor':
            content = `
                <h2>Bases de Datos Clave-Valor</h2>
                <p><strong>Concepto:</strong> Almacenan datos en pares clave-valor. Ejemplos: Redis.</p>
                <p><strong>Características:</strong></p>
                <ul>
                    <li>Simples y rápidas</li>
                    <li>Buena para cachés</li>
                    <li>Alta escalabilidad</li>
                </ul>
                <p><strong>Funcionamiento:</strong> Los datos se almacenan en un formato simple de clave-valor, lo que permite accesos rápidos.</p>
                <p><strong>Desventajas:</strong> No son adecuadas para consultas complejas.</p>
                <p><strong>Página oficial de documentación:</strong> <a href="https://redis.io/">Redis</a></p>
                <img src="IMG/clave.png" alt="Bases de Datos Clave-Valor" class="img-fluid mb-3 w-50">`;
            break;
        case 'columnas':
            content = `
                <h2>Bases de Datos Orientadas a Columnas</h2>
                <p><strong>Concepto:</strong> Permiten realizar consultas en grandes conjuntos de datos y almacenan los datos en columnas, en lugar de filas. Ejemplos: Cassandra.</p>
                <p><strong>Características:</strong></p>
                <ul>
                    <li>Optimizadas para consultas en grandes volúmenes de datos</li>
                    <li>Alto rendimiento en lectura y escritura</li>
                </ul>
                <p><strong>Funcionamiento:</strong> Los datos se almacenan en columnas, lo que mejora el rendimiento de las consultas que solo requieren ciertas columnas.</p>
                <p><strong>Desventajas:</strong> Pueden ser más complicadas de configurar y mantener.</p>
                <p><strong>Página oficial de documentación:</strong> <a href="https://cassandra.apache.org/">Cassandra</a></p>
                <img src="IMG/Columnas.png" alt="Bases de Datos Orientadas a Columnas" class="img-fluid mb-3 w-50">`;
            break;
        case 'grafos':
            content = `
                <h2>Bases de Datos de Grafos</h2>
                <p><strong>Concepto:</strong> Almacenan datos en forma de grafos, donde los nodos representan entidades y las aristas representan relaciones entre ellas. Ejemplos: Neo4j.</p>
                <p><strong>Características:</strong></p>
                <ul>
                    <li>Excelentes para datos con relaciones complejas</li>
                    <li>Permiten consultas rápidas sobre las relaciones</li>
                </ul>
                <p><strong>Funcionamiento:</strong> Los datos se almacenan en un grafo, lo que permite consultas eficientes sobre las relaciones entre los datos.</p>
                <p><strong>Desventajas:</strong> Pueden ser menos eficientes para datos sin muchas relaciones.</p>
                <p><strong>Página oficial de documentación:</strong> <a href="https://neo4j.com/">Neo4j</a></p>
                <img src="IMG/grafo.png" alt="Bases de Datos de Grafos" class="img-fluid mb-3 w-50">`;
            break;
        default:
            content = `<h2>Bienvenido al Panel Administrativo de Bases de Datos NoSQL</h2>`;
    }
    document.getElementById('content').innerHTML = content;
}
