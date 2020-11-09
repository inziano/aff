<template>
    <div class="w-full">
        <Tabs class="w-full">
            <TabPane label="Bio">
                <bio-form></bio-form>
            </TabPane>
            <TabPane label="Work">
                <work-form></work-form>
            </TabPane>
            <TabPane label="Education">
                <education-form></education-form>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import BioForm from './BioFormComponent'
import WorkForm from './WorkFormComponent'
import EducationForm from './EducationFormComponent'

export default {
    components: {
        'bio-form': BioForm,
        'work-form': WorkForm,
        'education-form': EducationForm
    }
}
</script>