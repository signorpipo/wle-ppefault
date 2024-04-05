import { TextComponent } from "@wonderlandengine/api";

export function setClonedMaterials(object) {
    let textComponents = object.pp_getComponents(TextComponent);

    for (let textComponent of textComponents) {
        if (textComponent.material != null) {
            textComponent.material = textComponent.material.clone();
        }
    }
}

export let TextUtils = {
    setClonedMaterials
};