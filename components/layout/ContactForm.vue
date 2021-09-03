<i18n>
{
  "es": {
    "contact_title": "Contacta con nosotros",
    "name": "Nombre completo",
    "name_placeholder":"Ingresa tu nombre y apellidos",
    "email": "Correo Electrónico",
    "email_placeholder":"Ingresa tu correo electrónico",
    "message": "Tu Mensaje",
    "message_placeholder":"Déjanos tu mensaje",
    "submit": "Enviar"
  },
  "en": {
    "contact_title": "Get in touch",
    "name": "Full Name",
    "name_placeholder":"Enter your name and surname",
    "email": "Email Address",
    "email_placeholder":"Enter your email address",
    "message": "Your Message",
    "message_placeholder":"Leave us a message",
    "submit": "Submit"
  }
}
</i18n>

<template>
  <div>
    <section id="offices">
      <div>
        <div class="col-sm-12 text-center">
          <h3 class="section-heading">{{ $t('contact_title') }}</h3>
        </div>
        <div id="contact-form" class="col-md-10 contact-form">
          <form
            accept-charset="UTF-8"
            action="https://getform.io/f/2012dd64-4cd1-4bae-afd8-567b4a0a874f"
            method="POST"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="form-group">
              <label for="InputName">
                {{ $t('name') }}
              </label>
              <input
                id="InputName"
                type="text"
                name="fullname"
                class="form-control"
                :placeholder="$t('name_placeholder')"
                required="required"
              />
            </div>
            <div class="form-group">
              <label for="InputEmail" required="required">
                {{ $t('email') }}
              </label>
              <input
                id="InputEmail"
                type="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                :placeholder="$t('email_placeholder')"
              />
            </div>
            <div class="form-group">
              <label for="ControlSelect">
                {{ $t('message') }}
              </label>
              <textarea
                id="message"
                class="form-control white-box"
                rows="5"
                name="message"
                :placeholder="$t('message_placeholder')"
                required=""
              >
              </textarea>
              <!-- 
              <hr />
              <div class="form-group mt-3">
                <label class="mr-2">Upload your CV:</label>
                <input type="file" name="file" />
              </div>
              <hr />
              -->
            </div>
            <button class="button" type="submit">
              {{ $t('submit') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
/*
 <div class="col-md-6 offset-md-3 mt-5">
          <h1>Simple Contact Form</h1>
          <form
            accept-charset="UTF-8"
            action="https://getform.io/f/2012dd64-4cd1-4bae-afd8-567b4a0a874f"
            method="POST"
            target="_blank"
          >
            <div class="form-group">
              <label for="exampleInputName">Full Name</label>
              <input
                id="exampleInputName"
                type="text"
                name="fullname"
                class="form-control"
                placeholder="Enter your name and surname"
                required="required"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" required="required">
                Email address
              </label>
              <input
                id="exampleInputEmail1"
                type="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Your Message</label>
              <textarea
                id="message"
                class="form-control"
                rows="5"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum porta venenatis. Morbi ultricies molestie felis. Maecenas auctor orci tincidunt lectus bibendum rutrum. Integer feugiat aliquet metus, et bibendum sem ornare et. Curabitur est arcu, vehicula eget orci eu, scelerisque volutpat sapien. Curabitur eget urna vel ligula dictum mattis eu vel urna. Donec quis volutpat augue, a scelerisque diam. Nulla facilisi. Aliquam facilisis ornare ligula, ut ultrices quam malesuada id."
                required=""
              >
              </textarea>
              <hr />
              <div class="form-group mt-3">
                <label class="mr-2">Upload your CV:</label>
                <input type="file" name="file" />
              </div>
              <hr />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
*/
</script>
