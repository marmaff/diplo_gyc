function HealthStatus({ health }) {
  if (!health) {
    return <p>Cargando health...</p>;
  }

  return (
    <section>
      <h2>Estado del BFF</h2>
      <p>status: {health.status}</p>
      <p>app: {health.app}</p>
    </section>
  );
}

export default HealthStatus;
