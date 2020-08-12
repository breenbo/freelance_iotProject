<template>
  <svgForm>
    <template v-slot:svg>
      <feedback />
    </template>
    <template v-slot:cardForm>
      <q-card class="borderColor">
        <q-card-section class="text-h3 text-weight-light text-grey-7">
          <span class="text-grey-5">Please leave some </span>feedback
        </q-card-section>
        <q-card-section>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-xl"
          >
            <q-input
              v-model="form.title"
              type="text"
              label="Title"
              placeholder="Please specify bug or feature request"
              class="col-auto"
            />
            <q-input
              v-model="form.text"
              type="textarea"
              label="Free text"
              placeholder="Explain with maximum of details your concern"
              autogrow
              class="col"
            />
            <div class="row justify-end">
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                rounded
              />
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
                class="q-ml-sm"
                outline
                rounded
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </template>
  </svgForm>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import feedback from '../components/svg/feedback.vue';
// use template with named slots because same template for both pages
import svgForm from '../components/svgForm.vue';

@Component({
  components: { feedback, svgForm },
})
export default class Feedback extends Vue {
  form = {
    title: '',
    text: '',
  };

  onSubmit() {
    console.log('form submitted', this.form);
  }
  onReset() {
    this.form.title = '';
    this.form.text = '';
    console.log('form reset');
  }
}
</script>

<style lang="sass" scoped>
.borderColor
  border-left: solid 6px $positive

.pageContainer
</style>