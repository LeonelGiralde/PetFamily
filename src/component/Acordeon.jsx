function Acordeon(){
    return(
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      About us
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>We are Pet Family. </strong> Our Mission: To Care, Protect and Love Our Furry Companions** At Pet Family, we firmly believe that all creatures deserve love, respect and a life full of well-being. We are passionately dedicated to the cause of pet care and preservation, working tirelessly to ensure that each of our furry companions has the opportunity to live a full and happy life.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What do we do?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Salvamos mascotas en situaciones vulnerables</strong> We are committed to promoting pet-loving responsibility, fostering a community that cares deeply about the well-being of animals. Our empathy for the needs of pets drives us to take concrete steps to protect and enrich their lives.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How do we do it?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>¡We do it thanks to you!</strong> Rescue and Adoption:
We actively search for animals in need, providing them with a safe haven and necessary medical attention. Through our dedicated team of volunteers and partners, we work towards finding loving forever homes for these deserving pets.

Education and Awareness:
Empowering the community with knowledge is a cornerstone of our efforts. We organize workshops, seminars, and outreach programs to educate people about responsible pet ownership, animal behavior, and the importance of spaying/neutering.

Medical Care and Rehabilitation:
We ensure that every animal under our care receives the best possible medical treatment and rehabilitation. Our team of skilled veterinarians and caregivers work tirelessly to nurse sick and injured animals back to health.

Advocacy and Legal Support:
We advocate for the rights and welfare of animals, working closely with lawmakers and policy influencers to strengthen animal protection laws. Our legal team provides support for cases involving animal abuse or neglect.

Community Engagement:
Building a community that cares is essential to our mission. We organize events, fundraisers, and volunteer opportunities to engage individuals and families in our cause. Together, we create a network of passionate advocates for animal welfare.

Spaying and Neutering Initiatives:
Controlling the pet population is a crucial step towards ensuring a better future for our furry companions. We conduct spaying and neutering campaigns, offering affordable or free services to pet owners in need.

Emergency Response and Disaster Relief:
In times of crisis, we mobilize our resources to provide emergency care and shelter for animals affected by natural disasters or emergencies.
      </div>
    </div>
  </div>
</div>
    )
}

export default Acordeon;