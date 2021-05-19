import Vue from "vue/types/umd";

export const n2br = (value: string): string => {
  return value
    .split('\\n')
    .map((a) => a.trim())
    .join('<br/>')
};

export const getContent = async (vueInstance: any, section: string): Promise<object> => {
  const content = await (vueInstance).$content(section).fetch()
  return content
}
