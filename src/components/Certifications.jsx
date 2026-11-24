import Container from "./common/Container";
import SectionTitle from "./common/SectionTitle";
import certifications from "../data/certifications";
import CertificationCard from "./CertificationCard";

function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <Container>

        <SectionTitle
          number="06."
          title="Certifications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Certifications;