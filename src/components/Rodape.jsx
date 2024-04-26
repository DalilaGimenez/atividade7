
import { Box, Text } from "@chakra-ui/react";

export default function Rodape() {
  return (
    <Box bg='gray.200' w="100%" p={4} color="white">
      <Text color='gray.700' textAlign="center">
        © {new Date().getFullYear()} Dalila Gimenez. Todos os direitos reservados.
      </Text>
    </Box>
  );
}